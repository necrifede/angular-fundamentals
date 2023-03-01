const { Subject, from } = rxjs;
 
const subject = new Subject();

// Subject as observable
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});
 
subject.next(1);
subject.next(2);
 
// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

// Subject as observer
   
  const observable = from([1, 2, 3]);
   
  observable.subscribe(subject); // You can subscribe providing a Subject
   
  // Logs:
  // observerA: 1
  // observerB: 1
  // observerA: 2
  // observerB: 2
  // observerA: 3
  // observerB: 3