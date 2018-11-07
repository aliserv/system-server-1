#discord bot made by spud
#spud - youtube
#@Spud1425 - discord
 
##IMPORTS##
import discord                      #MAKE SURE YOU DO "py -m pip install discord" IN COMMAND PROMPT!
from discord.ext.commands import bot
from discord.ext import commands
import random
import asyncio
import time
 
##PREFIX##
bot = commands.Bot(command_prefix='!')
 
##BOT IS READY##
@bot.event
async def on_ready():
    print("Bot Is Online! And Ready To Spam")
 
##SPAM COMMAND##
@bot.command(pass_context=True)
async def spam(ctx): #run "!spam" to run the command
    while True:
        await bot.say("YOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\n") #NOTE - you need the \n (new lines)
        await bot.say("YOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\n")
        await bot.say("YOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\n")
        await bot.say("YOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\n")
        await bot.say("YOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\nYOURTEXTHERE\n")
 
##BOT TOKEN##
bot.run ("NTA4MzU2MTQzMTM1OTgxNTgw.Dr-MNA.y2zqqq380oG8_-gpnslVSpG0ACk")
