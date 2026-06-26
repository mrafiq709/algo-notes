##### Creating Threads in Java

✅ 1. By Extending Thread Class
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();  // starts thread
    }
}
```
✅ 2. By Implementing Runnable Interface (Recommended)
```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}
```
| Method     | Descriptions                         |
| ---------: | :----------------------------------- |
| start()    | Creates a new thread and calls run() |
| run()      | Just executes like a normal method   |

##### Multiple threads increment a shared counter safely.
Here synchronized is playing the main rule.
```java
class Counter {
    int count = 0;

    public synchronized void increment() {
        count++;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) c.increment();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) c.increment();
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("Final Count: " + c.count);
    }
}
```
##### Deadlock Example
Two threads waiting on each other → program stuck.
```java
class Test {
    public static void main(String[] args) {
        final Object lock1 = new Object();
        final Object lock2 = new Object();

        Thread t1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread1 locked lock1");
                synchronized (lock2) {
                    System.out.println("Thread1 locked lock2");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread2 locked lock2");
                synchronized (lock1) {
                    System.out.println("Thread2 locked lock1");
                }
            }
        });

        t1.start();
        t2.start();
    }
}
```
##### Thread Pool Example
Limit number of threads using a pool
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 5; i++) {
            int task = i;
            executor.execute(() -> {
                System.out.println("Task " + task + " executed by " 
                    + Thread.currentThread().getName());
            });
        }

        executor.shutdown();
    }
}
```