import { left, right, type Either } from '@/core/either'
import type { Answer } from '../../enterprise/entities/anwser'
import type { AnswersRepository } from '../repositories/answers-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { NotAllowedError } from './errors/not-allowed-error'

interface EditAnswerUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

type EditAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  { answer: Answer }
>

export class EditAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    questionId,
    authorId,
    content,
  }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(questionId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())
    }

    answer.content = content

    await this.answerRepository.save(answer)

    return right({ answer })
  }
}
