[evokit-grid]: /packages/evokit-grid/

# About

Divide the user interface into independent blocks and think about them separately.

---

#### Packages list

Core:
  * [evokit](packages/evokit/)

Blocks:
  * [evokit-body](packages/evokit-body/)
  * [evokit-box](packages/evokit-box/)
  * [evokit-grid](packages/evokit-grid/)
  * [evokit-image](packages/evokit-image/)
  * [evokit-line](packages/evokit-line/)
  * [evokit-link](packages/evokit-link/)
  * [evokit-list](packages/evokit-list/)
  * [evokit-picture](packages/evokit-picture/)
  * [evokit-text](packages/evokit-text/)

#### Let's look at an example of creating a three-column list of product list with 10px indentation between cells

Every time if you need to place something in the grid, you have to create new styles only for this case without being able to flexibly reuse in other components.

```css
/* ProductList.css */

.products {
    font-size: 0;
}

.products__cell {
    display: inline-block;
    width: 33.33%;
    box-sizing: border-box;
    vertical-align: top;
}
```

```jsx
import React from 'react';
import './ProductList.css';

const ProductList = () => (
    <div className='products'>
        <div className='products__cell'>...</div>
        <div className='products__cell'>...</div>
        <div className='products__cell'>...</div>
    </div>
);
```

!> Look how clean and beautiful it is. A great option to use [evokit-grid]!

```jsx
import React from 'react';
import { Grid, GridItem } from 'evokit-grid';
import 'evokit-grid/style.css';

const ProductList = () => (
    <Grid grid-column={3} grid-indent='xs'>
        <GridItem>...</GridItem>
        <GridItem>...</GridItem>
        <GridItem>...</GridItem>
    </Grid>
);
```
