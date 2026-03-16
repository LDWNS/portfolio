---
title: OpenCode findings
date: 2026-03-07
description: Trying to run LLMs locally with Ollama and OpenCode — what worked and what didn't.
---

So. What's with all this LLM stuff? Is there any way to do it locally and effectively?

## YES

It takes very little to get it up and running locally!

```bash
# install Ollama: https://ollama.com/download
curl -fsSL https://ollama.com/install.sh | sh

# run Ollama
ollama
```

There you go. That was it. You can now find Ollama between your apps. Ollama is the open source equivalent to any of your favourite LLM's like ChatGPT, Claude, Gemini... The cool thing about it is that you can choose which model you want to use. I chose the Qwen3[^1] model for my laptop[^2].

Now. That was pretty cool, but some of my colleagues (& [everyone on LinkedIn](https://shumer.dev/something-big-is-happening)) have been flexing with Claude Code. A tool that can edit text with so called "agents". But, I don't want to use Claude Code, because I want my data to be my own (and more importantly, I'm cheap and I don't want to pay [Sam or Dario](https://www.cnbc.com/2026/02/19/openai-sam-altman-anthropic-dario-amodei-india-ai-summit.html))

So we use OpenCode!

```bash
# install OpenCode
curl -fsSL https://opencode.ai/install | bash

# run OpenCode with Ollama
ollama launch opencode
```

Boom, that's it!
In OpenCode we run the command `/init` to create an `AGENTS.md` (a context file for OpenCode). I added some context files and created some custom commands, the [docs](https://opencode.ai/docs) explain it well. You should really give it a try, it's pretty interesting.

## NO

Holy crabs, no, it doesn't work effectively. I tried all weekend to get good results, but just couldn't. I would *NEVER* blame my tools, so let's call it a skill issue. I assume the context I provided wasn't good enough to get this non-deterministic internet-trained probability-based guesser to work.

## In conclusion

I was surprised how well Ollama worked. Hence forth I choose thee, Ollama (with Qwen3[^1] and llama3.1[^3]) to be my primary LLM chat. OpenCode really didn't work for me.

I assume the model and it's context window weren't big enough, because all results fell short. The agents weren't able to generate a single compiling file, even though the right [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol) was activated and many context clues were available.

Using bigger/better models might fix this, but those tend to be subscription-based or require top-of-the-line hardware to get up and running.

Paying OpenAI, Google or Claude is possible, but surely spending a few grand on GPU's and RAM is the way to go... right?

[^1]: Qwen3:8b
[^2]: Apple Macbook Pro M3 18GB
[^3]: llama3.1:8b-instruct-q5_K_S
