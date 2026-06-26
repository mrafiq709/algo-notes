```java
// Sealed classes restrict which classes can inherit from them.
public sealed class Vehicle permits Car, Bike {
}

final class Car extends Vehicle {
}

final class Bike extends Vehicle {
}

```
> - Better control over inheritance
> - Improved security
> - Better domain modeling