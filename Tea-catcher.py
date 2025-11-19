import pygame
import math

pygame.init()

SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

player_x = 0
player_y = math.sqrt(1 - (player_x**2 / 2))

run = True
while run:

  screen.fill((0, 0, 0))

  pygame.draw.circle(screen, (150, 150, 50), (player_x * 200 + 300, - player_y * 200 + 300), 25)

  key = pygame.key.get_pressed()
  if (key[pygame.K_a] == True) & (player_x > -1):
    player_x -= 0.001
    player_y = math.sqrt(1 - (player_x**2 / 2))
  elif (key[pygame.K_d] == True) & (player_x < 1):
    player_x += 0.001
    player_y = math.sqrt(1 - (player_x**2 / 2))

  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      run = False

  pygame.display.update()

pygame.quit()