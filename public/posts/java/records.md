```java
// Records are immutable data carrier classes that reduce boilerplate code
public record Employee(int id, String name) {}

public record Employee(String name, double salary) {

    public double yearlySalary() {
        return salary * 12;
    }
}
```

- Java automatically generates
    - Constructor
    - Getters
    - equals()
    - hashCode()
    - toString()

 > - Cannot change
 > - Cannot extend classes, But can implement interfaces
 > - Use for DTO/Data holder