import { left, Right, right, type Either } from './either'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  } else {
    return left('error')
  }
}

test('Success result', () => {
  const result = doSomething(true)
  console.log(result)
  if (result.isRight()) {
    console.log(result.value)
  }

  expect(result.isRight()).toBe(true)
  expect(result.isLeft()).toBe(false)
})

test('Error result', () => {
  const result = doSomething(false)

  expect(result.isLeft()).toBe(true)
  expect(result.isRight()).toBe(false)
})
