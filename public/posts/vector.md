```cpp
vector<int> v;
v.push_back(1); // v.size()
sort(v.begin(), v.end()); // asc
sort(v.begin(), v.end(), greater<int>()); // desc
// using lambda function DESC
sort(v.begin(), v.end(), [](const int a, const int b) {return a > b; });
// find index
auto it = find(v.begin(), v.end(), value);
int index = it - v.begin();
// Declaring and initializing 2d vector
vector<vector<int>> v;
for (int i = 0; i < v.size(); i++)
    for (int j = 0; j < v[i].size(); j++)
        cout << v[i][j] << " ";

vector<string> words = {"banana", "apple", "cherry", "date"};
sort(words.begin(), words.end());
for (const auto& word : words) {
    cout << word << endl;
}
```
