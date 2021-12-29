# Split Pull Request Comment Body as Arguments into JSON Key-Values
Github Action for splitting pull request comment body arguments into JSON key-values. You can add <b>any</b> arguments and it will change the output into JSON key-values. For example, ``--<key>=<value>`` will be converted to:

```
{
  <key>: "<value>"
}

```

## Example usage
```yaml
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Split comment to args
        uses: qassandrach/comment-to-args
        id: split
        with:
          comment: ${{ github.event.comment.body }}

      - name: Some other action
        run: |
          echo ${{ fromJSON(steps.split.outputs.result) }}
```

## Inputs

| property   | isRequired | default | comment | example
|------------|:----------:|:-------:|-----------------------------|--------
| `comment`   |      ✓     |     ''    | PR comment body as arguments into JSON key-values | github.event.comment.body

## Outputs

| property   | type |
|------------|----------|
| `result`   |  JSON    | 


## Example comment body
```
build --name=website --limit=10.0.0.0,11.0.0.0
```

## Example `result` outputs in JSON
```
{
  name: 'website',
  limit: ['10.0.0.0','11.0.0.0']
}

```
