---
sidebar_label: SDK
sidebar_position: 5
---

# Getting Started with the SDK

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installing the SDK

<Tabs>
<TabItem value="c" label="C">

```console
$ git clone https://github.com/know-ontology/know.c.git
$ cd know.c
$ make && sudo make install
```

</TabItem>
<TabItem value="cpp" label="C++">

```console
$ git clone https://github.com/know-ontology/know.cpp.git
$ cd know.cpp
$ make && sudo make install
```

</TabItem>
<TabItem value="csharp" label="C#">

```console
$ dotnet add package Know
```

</TabItem>
<TabItem value="dart" label="Dart">

```console
$ dart pub add know
```

</TabItem>
<TabItem value="go" label="Go">

```console
$ go get -u github.com/know-ontology/know.go/
```

</TabItem>
<TabItem value="java" label="Java">

```console
# TODO
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```console
$ npm install @knowontology/know
```

</TabItem>
<TabItem value="python" label="Python">

```console
$ pip install know.py
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```console
$ gem install know
```

</TabItem>
<TabItem value="rust" label="Rust">

```console
$ cargo add know
```

</TabItem>
<TabItem value="swift" label="Swift">

```console
# TODO
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```console
$ npm install @knowontology/know
```

</TabItem>
</Tabs>

## Importing the SDK

<Tabs>
<TabItem value="c" label="C">

```c
#include <know.h>
```

</TabItem>
<TabItem value="cpp" label="C++">

```c++
#include <know.hpp>
```

</TabItem>
<TabItem value="csharp" label="C#">

```c#
using Know;
```

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'package:know/know.dart';
```

</TabItem>
<TabItem value="go" label="Go">

```go
import know "github.com/know-ontology/know.go/classes"
```

</TabItem>
<TabItem value="java" label="Java">

```java
import know.*;
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
import * as know from '@knowontology/know';
```

</TabItem>
<TabItem value="python" label="Python">

```python
from know import *
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require 'know'
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use know::*;
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// TODO
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
import * as know from '@knowontology/know';
```

</TabItem>
</Tabs>
