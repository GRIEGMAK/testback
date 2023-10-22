import { BaseEntity } from "src/base-entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Vertical } from "./../vertical/vertical.entity";
import { Comment } from "./../comment/comment.entity"

@Entity('card')
export class Card extends BaseEntity {
    @Column({ type:'varchar', length:100, nullable:true})
    name: string;

    @Column({ type:'text', nullable:true, default:null })
    description: string

    @ManyToOne(() => Vertical, (vertical) => vertical.cards)
    vertical: Vertical;

    @OneToMany(() => Comment, (comment) => comment.card)
    comments: Comment[];
}