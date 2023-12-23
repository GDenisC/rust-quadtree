# QuadTree

QuadTree made in Rust with no dependencies and NodeJS support

# Installation

1. Download the latest release from [GitHub](https://github.com/GDenisC/rust-quadtree).
2. Add this to your `node_modules` directory and name it `rust-quadtree`.

# Usage

```js
import { QuadTree, Point, Rect } from 'rust-quadtree';

const tree = new QuadTree([1000, 1000]);

tree.insert(new Point(50, 50));

const result = tree.query(new Rect(25, 25, 75, 75));

console.log(result);
```
