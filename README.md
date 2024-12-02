This repository demonstrates a common type error in TypeScript: attempting to perform an operation on incompatible types.  The `add` function is explicitly typed to accept two numbers, but the call to `add(1, "2")` passes a string as the second argument. This leads to a compile-time error in TypeScript and a runtime error in JavaScript if the type checking is not enabled. The solution demonstrates how to use type guards or type assertions to handle potential type mismatches.