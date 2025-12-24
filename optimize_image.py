from PIL import Image
import os
import sys

def resize_image(input_path, output_path, max_width=1200, max_size_kb=300):
    try:
        if not os.path.exists(input_path):
            print(f"Error: {input_path} not found.")
            return

        img = Image.open(input_path)
        
        # Convert to RGB (in case of RGBA)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        # Resize keeping aspect ratio
        w_percent = (max_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
        
        # Save with quality adjustment to fit size
        quality = 95
        while quality > 10:
            img.save(output_path, "JPEG", quality=quality, optimize=True)
            if os.path.getsize(output_path) < max_size_kb * 1024:
                print(f"Success: Saved to {output_path} ({os.path.getsize(output_path)//1024}KB, Quality: {quality})")
                return
            quality -= 5
            
        print("Warning: Could not compress below target size even at low quality.")
        
    except ImportError:
        print("Error: Pillow library not found. Please run 'pip install Pillow'")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # We want to optimize the one in public and convert to jpg for better compression
    resize_image('d:/WORK/Projects/Elsakr/public/cover.png', 'd:/WORK/Projects/Elsakr/public/cover.jpg')
