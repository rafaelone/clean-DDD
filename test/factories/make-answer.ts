import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/anwser'
import { Question } from '@/domain/forum/enterprise/entities/question'

import { faker } from '@faker-js/faker'

export function makeAnswer(
  ovveride: Partial<AnswerProps> = {},
  id?: UniqueEntityId,
) {
  const answer = Answer.create(
    {
      authorId: new UniqueEntityId(),
      questionId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...ovveride,
    },
    id,
  )

  return answer
}
