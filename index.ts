import { filter, range } from "rxjs";

range(1, 200)
  .pipe(filter((x) => x % 2 === 1))
  .subscribe((y) => console.log(y));
