import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  Question,
  type QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(ovveride: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'Example Question',
    slug: Slug.create('example-question'),
    authorId: new UniqueEntityId(),
    content: 'Example content',
    ...ovveride,
  })

  return question
}
