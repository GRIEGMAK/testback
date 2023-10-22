import { BaseEntity } from "src/base-entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Card } from "./../card/card.entity";

@Entity('comment')
export class Comment extends BaseEntity {
    @Column({ type:'text', nullable:true, default:null })
    content: string

    @ManyToOne(() => Card, (card) => card.comments)
    card: Card;

}