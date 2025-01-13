import { right, type Either } from '@/core/either'
import type { AnswerComment } from '../../enterprise/entities/answer-comment'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { AnswersRepository } from '../repositories/answers-repository'

interface FetchAnswerCommentUseCaseRequest {
  page: number
  answerId: string
}

type FetchAnswerCommentUseCaseResponse = Either<
  null,
  { answerComments: AnswerComment[] }
>

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepositoruy: AnswerCommentsRepository) {}

  async execute({
    page,
    answerId,
  }: FetchAnswerCommentUseCaseRequest): Promise<FetchAnswerCommentUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepositoruy.findManyByAnswerId(answerId, {
        page,
      })

    return right({ answerComments })
  }
}
