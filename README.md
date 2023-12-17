# QuadTree

QuadTree made in Rust with no dependencies and NodeJS support

# Installation

```bash
npm install rust-quadtree
```

# Usage

```js
import { QuadTree, Point, Rect } from 'rust-quadtree';

const tree = new QuadTree([1000, 1000]);

tree.insert(new Point(50, 50));

const result = tree.query(new Rect(25, 25, 75, 75));

console.log(result);
```