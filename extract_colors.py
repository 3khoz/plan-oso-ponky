from PIL import Image
from collections import Counter
import math

def is_light(color):
    r, g, b = color
    # Simple brightness formula
    brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 200  # Threshold for "light"

def get_accent_colors(image_path, num_colors=5):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        image = image.resize((100, 100))
        pixels = list(image.getdata())
        
        # Filter out light pixels
        darker_pixels = [p for p in pixels if not is_light(p)]
        
        if not darker_pixels:
            print("No dark colors found.")
            return

        counts = Counter(darker_pixels)
        common = counts.most_common(num_colors)
        
        print("Accent Colors:")
        for color, count in common:
            hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
            print(f"{hex_color} (count: {count})")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_accent_colors("icon.png")
