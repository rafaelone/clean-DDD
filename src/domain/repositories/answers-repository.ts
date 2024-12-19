import type { Answer } from '../entities/anwser'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}
