Instead `name` one might need to write `refname`.

Templates number 2 don't rquire writing `content=` or `תוכן=` before a note's content.

## English 1

```wiki
<includeonly>{{#if:{{{name|}}}
    | {{#tag:ref|{{{content|}}}|name={{{name}}}}}
    | {{#tag:ref|{{{content|}}}}}
}}</includeonly>
```

## English 2

```wiki
<includeonly>{{#if:{{{name|}}}
    | {{#tag:ref|{{{1|}}}|name={{{name}}}}}
    | {{#tag:ref|{{{1|}}}}}
}}</includeonly>
```

## Hebrew 1

```wiki
<includeonly>{{#תנאי:{{{שם|}}}
    | {{#תג:ref|{{{תוכן|}}}|name={{{שם}}}}}
    | {{#תג:ref|{{{תוכן|}}}}}
}}</includeonly>
```

## Hebrew 2

```wiki
<includeonly>{{#תנאי:{{{שם|}}}
    | {{#תג:ref|{{{1|}}}|name={{{שם}}}}}
    | {{#תג:ref|{{{1|}}}}}
}}</includeonly>
```
