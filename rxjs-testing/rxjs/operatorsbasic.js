const {of, pipe, first, map} = rxjs

// of(1, 2, 3)
//   .pipe(first())
//   .subscribe((v) => console.log(`value: ${v}`));

map(x=>x+1)(of(1,2,3)).subscribe(v => console.log('v: ', v))

first()(of(5,2,3)).subscribe(v => console.log('v: ', v))