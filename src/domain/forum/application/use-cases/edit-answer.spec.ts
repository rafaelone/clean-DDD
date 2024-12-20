import { UniqueEntityId } from '@/core/entities/unique-entity-id'

import { EditAnswerUseCase } from './edit-answer'
import { InMemoryAnswerRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'

let inMemoryAnswerRepository: InMemoryAnswerRepository
let sut: EditAnswerUseCase

describe('Edit question', () => {
  beforeAll(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository()
    sut = new EditAnswerUseCase(inMemoryAnswerRepository)
  })

  it('should be able to edit a answer', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('question-1'),
    )

    inMemoryAnswerRepository.create(newAnswer)

    await sut.execute({
      questionId: newAnswer.id.toString(),
      authorId: 'author-1',
      content: 'New content',
    })

    expect(inMemoryAnswerRepository.items[0]).toMatchObject({
      content: 'New content',
    })
  })

  it('should not be able to edit a answer from another user', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('question-1'),
    )

    inMemoryAnswerRepository.create(newAnswer)

    expect(() => {
      return sut.execute({
        questionId: newAnswer.id.toString(),
        authorId: 'author-2',
        content: 'New content',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
