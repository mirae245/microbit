내변수 = 0

def on_button_pressed_a():
    global 내변수
    basic.show_arrow(ArrowNames.NORTH)
    basic.pause(200)
    basic.clear_screen()
    basic.pause(200)
    basic.show_arrow(ArrowNames.NORTH)
    basic.pause(100)
    내변수 = 0
    for 내변수2 in range(9):
        basic.show_number(내변수2 + 1)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.show_leds("""
        # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
    """)
    basic.show_leds("""
        # . . . #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
    """)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global 내변수
    basic.show_arrow(ArrowNames.SOUTH)
    basic.pause(200)
    basic.clear_screen()
    basic.pause(200)
    basic.show_arrow(ArrowNames.SOUTH)
    basic.pause(100)
    내변수 = 10
    for index in range(9):
        내변수 = 내변수 - 1
        basic.show_number(내변수)
    basic.clear_screen()
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # . . . #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
    """)
    basic.show_leds("""
        # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
    """)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)
