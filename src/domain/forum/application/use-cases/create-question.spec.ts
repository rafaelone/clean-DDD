import type { Question } from '../../enterprise/entities/question'
import type { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New Question',
    content: 'Question Content',
  })

  expect(question.id).toBeTruthy()
})
