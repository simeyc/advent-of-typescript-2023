type SantaListProtector<T extends unknown> = T extends object ? { readonly [P in keyof T]: T[P] extends Function ? T[P] : SantaListProtector<T[P]> } : T;
