##### Single set (No duplicate)

```cpp
set <int> s;
set <int> :: iterator it;
int number;
cin >> number;
s.insert(number);
if(s.find(number) != s.end()) cout << "Found" << endl;
if(s.find(number) == s.end()) cout << "Not Found" << endl;
for(it = s.begin(); it != s.end(); it++) {
    cout << *it << "";
}
```

##### multiset

-   sorted ASC Default
-   Allows duplicate
-   O(log n)

```cpp
multiset<int> ms; // ASC default
// multiset<int, greater<int>> ms; // DESC

ms.insert(5);
ms.insert(3);

for (int x : ms)
    cout << x << " ";

ms.count(5);

auto it = ms.lower_bound(3);
if (it != ms.end())
    cout << "Lower bound of 3: " << *it << "\n";
ms.insert(1); ms.insert(2); ms.insert(2);
// 1 2 2 3 5
auto it = ms.lower_bound(2);
if(it != ms.end())
    cout << *it << endl; // ans: 2
// All value
while(it != ms.end()) {
    cout << *it << " "; // 2 2 3 5 ->
    it++; // will go forward
    // it--; will go backward and while(it != ms.begin()) // 2 1 <-
}
it = ms.upper_bound(2);
if(it != ms.end())
    cout << *it << endl; // ans: 3

ms.erase(ms.find(5));  // only one 5 removed
```
