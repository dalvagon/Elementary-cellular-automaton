def generate():
    with open("README.md", "w") as f:
        for rule in range(0, 256):
            s = f"Rule {rule}: <br/> \n ![alt text](https://github.com/dalvagon/Elementary-cellular-automaton/blob/main/assets/rule{rule}.png?raw=true) <br/> \n"
            f.write(s)


if __name__ == "__main__":
    generate()
