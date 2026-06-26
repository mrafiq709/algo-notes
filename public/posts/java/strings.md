##### String
String is an immutable class, meaning once an object is created, its value cannot be changed.
```java
String s = "Hello";
s = s + " World";
```
👉 A new object is created instead of modifying the existing one.
👉 Thread-safe

##### StringBuilder
StringBuilder is mutable, meaning you can modify the same object without creating new ones.
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb);
```
👉 Not thread-safe

##### StringBuffer
StringBuffer is also mutable, but it is thread-safe.
```java
StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");
System.out.println(sb);
```