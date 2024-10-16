Creating a brand new Pterodactyl theme can prove to be difficult, in this blog post I'll go over the basics of creating a Pterodactyl theme with the extensible (and open source) [Blueprint framework](https://blueprint.zip).

First, let me introduce myself. I’m Emma, the developer behind [Nebula](https://nebula.style), one of the most advanced themes for Blueprint which I’ve been actively maintaining and updating since September 2023.

This guide will go over creating a basic theme for Pterodactyl which you’ll be able to just use for yourself, sell on marketplaces such as [sourceXchange](https://sourcexchange.net/) and [BuiltByBit](https://builtbybit.com), share with others or just create for the heck of it.

## Download and install Blueprint

First you'll need to install [Blueprint](https://blueprint.zip) — the extension framework for Pterodactyl used by developers all around the world.

![Screenshot showcasing the Blueprint installation guide.](./images/custom-pterodactyl-theme/installation.png)*Screenshot showcasing the Blueprint installation guide.*

**Follow the installation [guide on Blueprint’s website](https://blueprint.zip/docs/?page=getting-started/Installation)** and go back to this guide after finishing it.

## Setup development environment

After getting Blueprint up and running, open up your admin panel and navigate to Blueprint’s settings. Set “**Developer Mode**” to **enabled** and press “**Save**”.

![](https://cdn-images-1.medium.com/max/3134/1*izxX7WtJmNC1d60w8rC_YQ.png)

Now **open up your terminal** and **SSH into your server**. Run the `blueprint -init` command and enter some information about your extension. Select “Barebones” as the template in case it asks for that.

![](https://cdn-images-1.medium.com/max/2474/1*kqH-Ku8FSyW5iBa9aq-lKg.png)

Navigate to your extension development directory with “**cd /var/www/pterodactyl/.blueprint/dev**” (might be different depending on how much you wandered off Pterodactyl’s installation documentation) and take a peek at the files. You’ve now set up the foundation of your first Pterodactyl theme!

## Creating a stylesheet

You might have already noticed a “conf.yml” file floating around — this is a file that allows extensions to define basic information about the extension and which files to look for when utilizing various extension APIs ([documentation](https://blueprint.zip/docs/?page=documentation/confyml)).

Open the file (with, for example, `nano conf.yml`) and set the dashboard wrapper option to `wrapper.blade.php` like demonstrated below. Usually when making themes it’s better to utilize the dashboard css option, but for the sake of this tutorial we’ll make use of the wrapper as it takes less time to apply when building your extension.

    dashboard:
      css: ""
      wrapper: "wrapper.blade.php"
      components: ""

After editing this file and saving it, create a new file called `wrapper.blade.php`, we’ll use this file to store our stylesheet. Place the following into this file:

    <style>
    </style>

Now that we’ve done our preparations — onto creating your theme!

## Styling elements

Open up your Pterodactyl panel and press “CTRL SHIFT I” to open inspect element. Use this to pick an element from the page with the picker tool (which you can also trigger with “CTRL SHIFT C”).

![](https://cdn-images-1.medium.com/max/2524/1*zUGJKYJvnQVn57XrrWmCzg.png)

Now that you’ve picked an element, right click it in inspect and select “Copy > CSS Selector”. This will copy a CSS Selector that will only pick that specific element, you might want to pick elements based on their “classes” instead for some more advanced modifications.

![](https://cdn-images-1.medium.com/max/2000/1*eaDkIe8KZLyBIHoQjNqzUw.png)

Now paste it between the \<style> tags and add some CSS properties to it, such as demonstrated below.

![](https://cdn-images-1.medium.com/max/2000/1*TSCy3otgPFsAKTSYueawMw.png)

Save the file and run `blueprint -build` on your server and watch stuff change on your panel! If something isn’t overwriting the default Pterodactyl styling, you can add “!important” at the end of a CSS property, like done below.

![](https://cdn-images-1.medium.com/max/2000/1*zz_UugFzEByrzZfcEUBe-g.png)

Do this for every element you want to style and you’ll be able to put together your very own Blueprint-based theme! If you want a head-start, you can also use the “Theming fundamentals” template when initializing your extension, which might help you modify more elements at once.

## Conclusion

Creating themes with Blueprint is fairly easy and requires little-to-no previous Pterodactyl experience.

I hope this has given you a basic overview of how to go about theme development. Feel free to stop by in the [Blueprint community](https://discord.gg/cRdcV7TdQW) if have any questions, want to showcase your work and/or just want to talk with other extension developers.
> [Click this link to learn more about my own Pterodactyl theme “Nebula”.](https://nebula.style)