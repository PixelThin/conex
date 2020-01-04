# conex
A small npnm package that allows you to leverage JavaScript template strings in package.json scripts and at the command-line.

## Features
* Use of JavaScript template strings in package.json scripts or the command line
* Import configuration variables from a file and access them via template strings in package.json scripts or the command-line
* Automatic import of package.json variables (if available) for use via template strings in package.json scripts or the command-line

## Installation

### Global (for use at the command-line):
```
yarn global add conex
```
### Local dependency (for use within another package) :
```
yarn add -D conex
```

## Examples
### Access package.json values in an npm build script:
```
// file: package.json
// Add a tag to the docker container that matches the package.json version number
{
    "version": "1.2.3",
    "scripts": {
        "build-docker": "conex 'docker build . -t myDockerName:${package.version}'"
    }
}
```

## Access values from a custom config (JSON) file:
```
TBD
```
