import $i from '~/i18n'
const state = () => ({
  listNavbar: [
	{
		text:$i.t('button.rules'),
		path:'/',
	}  
  ],
  listAvatar: [
  	{
  	 text: "خروج",
  	 path: "/exit" 
  	}
  ],
})

export default {
  state,
}

