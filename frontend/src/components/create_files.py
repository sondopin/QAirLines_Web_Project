import os

# Path to the components directory
components_dir = "frontend/src/components"

# Iterate through each folder in the components directory
for folder_name in os.listdir(components_dir):
    folder_path = os.path.join(components_dir, folder_name)

    # Check if it's a directory
    if os.path.isdir(folder_path):
        # Define file paths
        tsx_file = os.path.join(folder_path, f"{folder_name}.tsx")
        css_file = os.path.join(folder_path, f"{folder_name}.module.css")

        # Create the .tsx file
        if not os.path.exists(tsx_file):
            with open(tsx_file, "w") as f:
                f.write(f"// {folder_name}.tsx\n\nexport const {folder_name} = () => {{\n    return (\n        <div className='{folder_name}'>\n            <h1>{folder_name}</h1>\n        </div>\n    );\n}};\n")
            print(f"Created {tsx_file}")

        # Create the .module.css file
        if not os.path.exists(css_file):
            with open(css_file, "w") as f:
                f.write(f"/* {folder_name}.module.css */\n\n.{folder_name} {{\n    /* Add styles here */\n}}")
            print(f"Created {css_file}")
