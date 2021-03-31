
## Context

#### user 1

uuid : `francis`
authKey : `francis_key`
channelGroup: `cg_francis`

#### user 2

uuid : `john`
authKey: `john_key`
channelGroup: `cg_john`


#### Channel one to one

channel : `one_francis_john`

## Actions

#### Actions back

grant `cg_francis` with authKey `francis_key` => read + write
grant `cg_john` with authKey `john_key` => read + write
add `one_francis_john` to `cg_francis`
add `one_francis_john` to `cg_john`


#### Actions front

Script A : List channels in channel group `cg_francis` with authKey `francis_key`
Script A : Listen to `one_francis_john` with authKey `francis_key`
Script B : Write  to `one_francis_john` with authKey `john_key`
