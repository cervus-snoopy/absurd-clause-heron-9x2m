# absurd-clause-heron-9x2m

[![make.fun · u-donrulezz-the-absurd-clause-contest-035cc0f1](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/cervus-snoopy/absurd-clause-heron-9x2m/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/cervus-snoopy/absurd-clause-heron-9x2m/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)

Entry for [The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1) on make.fun — a single original English sentence of at most 200 characters, phrased as a clause buried deep inside a terms-of-service agreement.

## The clause

> Clause 14: any dispute arising under this agreement shall be resolved by competitive duck herding, best of three rounds, at dawn, on neutral farmland.

## How it works

`main.ts` writes the clause to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, or `output/` by default). It refuses to run if the clause ever grows past the 200-character limit.

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```
