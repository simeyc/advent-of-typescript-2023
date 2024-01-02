 // Recursion. Complete sorcery!
 type Reverse<T extends string> = T extends `${infer Char}${infer Rest}` ? `${Reverse<Rest>}${Char}` : '';
