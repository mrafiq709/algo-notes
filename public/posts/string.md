##### erase/delete

```cpp
String str ("This is an example sentence");
str.erase(10, 8) // index of first chars(10) & number of chars to remove(8)
str.erase(str.begin()+9)
str.erase(str.begin()+5, str.end()-9) // keep first 5 chars & last 9 chars
```

##### sort

```cpp
sort(str.begin(), str.end()); // Ascending
sort(str.begin(), str.end(), greater<char>()); // Descending
```

##### swap

```cpp
firstString.swap(secondString);
```

##### swap chars

```cpp
char str[] = "1234" // swap 4 & 1
void swap(char *x,char *y) {
    char temp;
    temp = *x;
    *x = *y;
    *y = temp;
}
swap(str,str+3); // output: 4231
```

##### append/add

```cpp
str.append(str2); // add str2 with str
str.append(str2, 6, 3); // start from 6, length 3 from str2
str.append(str2, 5); // start from 0,length 5
str.append(10u, “.”); // add 10 dot(.)
```

##### replace

```cpp
replace(str.begin(), str.end(), 'l', 'x');
```

##### substring

```cpp
str.substr(3, 5) // start from position 3 and take 5 chars
str.substr(3) // start from position 3 to the end.
str.find("live") // find the start position of live
```

##### string to number

```cpp
std::stoi(str) // int
std::stoll(str) // long long
```

##### number to string

```cpp
std::string s = std::to_string(42);
```

##### Z algorithm

```cpp
vector<int> res;
void z_algo(string str, vector<int>& Z) {
    int left=0,right=0;
    for(int pos=1;pos<str.length();pos++)
    {
        if(pos>right)
        {
            left=right=pos;
            while(right<str.length() && str[right]==str[right-left])
                right++;
            Z[pos] = right-left;
            right--;
        }
        else
        {
            int pos1 = pos-left;
            if(Z[pos1]<right-pos+1)
                Z[pos] = Z[pos1];
            else
            {
                left = pos;
                while(right<str.length() && str[right] == str[right-left])
                    right++;
                Z[pos] = right-left;
                right--;
            }
        }
    }
}

void matchPattern(string text, string pattern) {
    string prefix = pattern;
    pattern.append("$").append(text);

    vector<int> Z(pattern.length(), 0);
    z_algo(pattern, Z);
    // int sz = sizeof(Z) / sizeof(Z[0]);
    for(int i = 0; i < pattern.length(); i++) {
        cout << Z[i] << " ";
        if(Z[i] == prefix.length()) { // The max value in Z array is the longest substr
		    res.push_back(i - prefix.length() - 1); // indexes of substring
        }
    }
}

int main() {
    string text;
    string pattern;
    cin >> pattern >> text;
    matchPattern(text, pattern);
    puts("");
    for(int i = 0; i < res.size(); i++) {
        cout << text.substr(res[i], pattern.length()) << endl;
    }
}
```

##### Edit Distance (DP)

```cpp
#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> dp;

int editDistance(string S, string T) {
    int n = S.length();
    int m = T.length();

    dp.resize(n+1, vector<int>(m + 1));

    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (S[i - 1] == T[j - 1])
                dp[i][j] = dp[i - 1][j - 1];
            else {
                dp[i][j] = min({
                    dp[i - 1][j - 1], // replace
                    dp[i - 1][j],     // delete
                    dp[i][j - 1]      // insert
                }) + 1;
            }
        }
    }
    return dp[n][m];
}

int main() {
    string S, T;
    cin >> S >> T;
    int dist = editDistance(S, T);
    cout << "Need " << dist << " operation" << endl;

    return 0;
}
```

##### Big input check two string edit distance

```cpp
#include <bits/stdc++.h>
using namespace std;

bool isEditDistanceWithinK(const string &s, const string &t, int k) {
    int m = s.size(), n = t.size();

    if (abs(m - n) > k) return false;

    int i = 0, j = 0, mismatches = 0;

    while (i < m && j < n) {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            mismatches++;
            if (mismatches > k) return false;

            if (m > n) {
                i++; // delete from s
            } else if (m < n) {
                j++; // insert into s
            } else {
                i++; // replace
                j++;
            }
        }
    }

    mismatches += (m - i) + (n - j);
    return mismatches <= k;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int K;
    string S, T;
    cin >> K >> S >> T;

    cout << (isEditDistanceWithinK(S, T, K) ? "Yes" : "No") << endl;

    return 0;
}
```
