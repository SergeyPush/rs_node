Перед запуском програмы нужно запустить комманду

```bash
npm install
```

Запустить программу коммандой:

1. -a (--action) is encode

```bash
node index.js node my_caesar_cli -a encode -s 1 -i "text.txt" -o "output.txt"

```

2.  -a (--action) is decode
    Decoding encoded initial string with the same -s(--shift) number produces the initial string.

```bash
node index.js --action decode --shift 1 --input input.txt --output output.txt
```
