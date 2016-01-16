var sound = new Audio('./imperial_march.mp3');
$(document).ready(function () 
{
	$("form").submit(function (e) 
	{
var n = $( ":checkbox:checked" ).length;
		if(n != 0)
		{
		if($( ":checkbox:checked" ).val() == 'light_side')
			{
				return true;
			}
			else
			{	
				e.preventDefault();
				sound.play();
			}
		}
		else
		{
			return true;
		}
	})
});