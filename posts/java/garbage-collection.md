```java
// Memory is allocated in the heap
Student s = new Student();
```
- An object is eligible for garbage collection when:
    - It no longer has any references pointing to it
```java
Student s = new Student();
s = null;  // Now object is unreachable
```
> - Automatically removes unused objects
> - Frees heap memory
> - Managed by JVM
