<p align="center">
  <h3 align="center">Huffman URL Compressor</h3>

  <p align="center">
     ⚙ Convert any kind of String into a url-friendly parameter using Huffman Encoding ⚙
    <br />
    <a href="https://github.com/mlacosta/huffman-url-compressor#table-of-contents"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/mlacosta/huffman-url-compressor/issues">Report Bug</a>
    ·
    <a href="https://github.com/mlacosta/huffman-url-compressor/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Motivation](#motivation)
- [Huffman Compression](#huffman-compression)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

<!-- CONTRIBUTING -->

### Built With

- [ncc](https://github.com/vercel/ncc/)
- [jest](https://github.com/facebook/jest)
- [ora](https://github.com/sindresorhus/ora)
- [commander](https://github.com/tj/commander.js/)
- [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)

## Getting Started

To install this dependency on your project:

`npm i huffman-url-compressor`

## Motivation

This library was originally intended to be used as an URL-friendly encoder/decoder. The idea was to process a chunk of text, compress the data and then embed it in an URL as a query parameter. Later on, you can retrieve the original piece of text using the same encoder.

A typical application for this library is permalink creation and sharing. For instance, if you want to put a long text on an URL but you are constrained in length, this encoder will output a shorter base64-string that you can use instead. After that, you can reduce the length further using an URL-shortening service.

## Huffman Compression

Huffman compression is a data encoding technique that uses a greedy approach for lossless compression based on how often a character or symbol occurs. Theoretically, It can achieve a compression rate between 20 and 90 percent.

First, suppose we have a set of 6 letters and the number of occurrences (frequency) for each one:

| letter | frequency |
| ------ | --------- |
| a      | 45        |
| b      | 13        |
| c      | 12        |
| d      | 16        |
| e      | 9         |
| f      | 5         |

Since we have 6 symbols, a naive approach would be to use a 3-bit encoding for each one of them:

| letter | bitstring |
| ------ | --------- |
| a      | 000       |
| b      | 001       |
| c      | 010       |
| d      | 011       |
| e      | 100       |
| f      | 101       |

For instance, if we want to encode the string 'bacab' using the table from above:

```
'bacab' transforms into '001000010000001'

```

Then, we can encode it further using a [base64](https://en.wikipedia.org/wiki/Base64) approach:

| binary (6-bits) | base64 (char) |
| --------------- | ------------- |
| 010000          | Q             |
| 001000          | I             |

```
'001000010000001' transforms into 'IQI='
```

In this case, the symbol `=` is used for zero-padding by convention.

Note this way of encoding could be served as a binary tree where each leaf represents a letter and its frequency. More generally, each node's parent contains the summation of its children's frequency and the combination of their symbols. Starting from the root, one could simply make a symbol search and output a `0` or `1` based on if you moved to the left or right respectively.

![](https://i.imgur.com/QM2laV5.jpg)

However, a better approach would be to create [prefix-efficient](https://en.wikipedia.org/wiki/Prefix_code) codes based on each letter's frequency. In that way, we could generate a variable-length encoding that depends on the number of occurrences (the more frequent a letter the shorter its representation). This results in a reduced bitstring on average. This particular way of operating is known as Huffman Compression.

First, we need to generate a node for each one of the letters. We can use a data structure like this:

```
{
  "symbol": 'a'
  "frequency": 45
}
```

Next, we combine all the nodes in a tree-like structure using a greedy algorithm that chooses between the least two frequent symbols and merges them. In our example, we start with:

```
{
  "symbol": 'f'
  "frequency": 5
}

{
  "symbol": 'e'
  "frequency": 9
}
```

and we create the node:

```
{
  "symbol": 'fe'
  "frequency": 14
}
```

Finally, we remove the nodes 'e' and 'f' from our pool and we replace them with the node 'fe'. By induction, after all the nodes are merged, we would obtain a Huffman tree that serves as our encoder:

![](https://i.imgur.com/roKnNFS.jpg)

The optimal way to implement this is using a [min-heap](<https://en.wikipedia.org/wiki/Heap_(data_structure)>) data structure.

Back to our original example but now using the Huffman tree:

| letter | bitstring |
| ------ | --------- |
| a      | 0         |
| b      | 101       |
| c      | 100       |
| d      | 111       |
| e      | 1100      |
| f      | 1100      |

```
'bacab' transforms into '10101000101'
```

We save 26,67% of space from our original case.

`compression ratio (CR in %) = 11/15 x 100% = 73,34%`

`space saved = (1 - CR) x 100% = 26,67 %`

Later we can introduce base64 encoding:

```
'10101000101' transforms into  qKA=
```

**Note:** there's a trade-off between the Huffman compression rate and the expansion generated by the base64 encoding that should be taken into consideration given the case.

For more theoretical background check: [Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). Introduction to algorithms. MIT press.](https://books.google.com.ar/books?hl=en&lr=&id=aefUBQAAQBAJ&oi=fnd&pg=PR5&dq=introductions+to+algorithms+cormen&ots=dO5uNAXSaZ&sig=IMmhA7_JXSWjGppyqv6UiAMfufI&redir_esc=y#v=onepage&q=introductions%20to%20algorithms%20cormen&f=false)

## Examples

### Fluent bit configuration files

We start gathering several Fluent bit configuration files that serve as a training [dataset](https://gist.github.com/mlacosta/b85c4a1788f0210a353b2fcead281403), which means, we obtain the frequency for each symbol present on all the configurations.

Then, say you want to compress and embed the following configuration in an URL:

```
[INPUT]
    Name        tail
    Tag         tail.01
    Path        /var/log/system.log

[FILTER]
    Name record_modifier
    Match *
    Record hostname ${HOSTNAME}

[OUTPUT]
    Name file
    Match *
    Path output.txt
```

The trained encoder will generate a base64 compressed version that you can use as an URL parameter.

```
vz9KnJmEW_yuoj6uIG3_Vxn1cQLYo8t_3nVW-LaueLCkwWxYysUNhSZa1-aPq5kd0It_ldRHvidL0AUJQIOSH2_6HVnW-oW_3xOl6HrUsqV1EbSl7QMOmpDdSjltrX4yTNTkzCLf5XUR45Axb_odWdb6hb_vOqt9K9by9W6idbW
```

In this case, we obtained a sequence that is 15% shorter (Note this is below the theoretical threshold of 20% due to the expansion generated by the base64 encoding)

To retrieve the original configuration just use the encoded string.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
