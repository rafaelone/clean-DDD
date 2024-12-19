import type { Answer } from '@/domain/forum/enterprise/entities/anwser'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}
