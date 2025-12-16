#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Crea iconos PNG simples para la app Oso & Ponky
Ejecuta: python create-icons.py
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    print("PIL instalado")
except ImportError:
    print("Instalando Pillow...")
    import subprocess
    subprocess.check_call(["pip", "install", "pillow"])
    from PIL import Image, ImageDraw, ImageFont
    print("Pillow instalado")

def create_icon(size, filename):
    # Crear imagen con fondo oscuro
    img = Image.new('RGB', (size, size), color='#0b0f14')
    draw = ImageDraw.Draw(img)

    # Círculo azul de fondo
    margin = size // 8
    draw.ellipse([margin, margin, size-margin, size-margin],
                 fill='#50a0ff', outline='#70b0ff', width=size//40)

    # Emoji de perro (como texto)
    try:
        # Intenta usar una fuente del sistema que soporte emojis
        font_size = size // 2
        font = ImageFont.truetype("seguiemj.ttf", font_size)  # Windows emoji font
    except:
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf", font_size)
        except:
            # Fallback: usar fuente por defecto
            font = ImageFont.load_default()

    # Dibujar emoji centrado
    text = "🐕"

    # Calcular posición centrada (aproximada)
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]

    position = ((size - text_width) // 2, (size - text_height) // 2 - size//10)

    draw.text(position, text, font=font, fill='white')

    # Guardar
    img.save(filename, 'PNG')
    print(f"Creado: {filename} ({size}x{size})")

# Crear los dos tamanos necesarios
create_icon(192, 'icon-192.png')
create_icon(512, 'icon-512.png')

print("\nIconos creados exitosamente")
print("La app ya esta lista para instalar")
