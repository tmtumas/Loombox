  let pnl_clicked = -1 // global variable to know if a light panel box has been clicked.
  
   //import { WLEDClient } from "wled-client.js";
  
  init();

  let l_box_pix_per_in = 20
  let l_box_w = 7.5 * l_box_pix_per_in
  let l_box_h = 31 * l_box_pix_per_in
  
  
  let l_box_x = 150
  let l_box_y = 10
  
  let lft_lt_box = [-0.25,0.01,0.20, 0.99];
  let rgt_lt_box = [1.05,0.01,0.20,0.99];
  let top_lt_box = [0.1,0.024,0.80,0.19];
  let mid_lt_box = [0.1,0.242,0.80,0.516];
  let bot_lt_box = [0.1,0.782,0.80,0.19];
  let def_col = 'rgb(112,240,106)';

 // const wled = new WLEDClient('192.168.4.101');

  async function init() {
	const wled = new WLEDClient('192.168.4.101')
	await wled.init()

	console.log(wled.info.version) // 0.12.0
  }
  init().catch(console.error)

  class Lgt_panel {
     constructor() {
       this.id = 1
       this.name = 'null'
       this.x1 = 100
       this.y1 = 200
       this.x2 = 200
       this.y2 = 300
       this.pr_c = 'red'
       this.se_c = '#00BCD4'
       this.bg_c = '#00BCD4'
       this.pal_id = 0
       this.eff_id = 1
       this.eff_sp = 10
       this.eff_tmg = 20
       
     }
    show_lp() {
      rectMode(CORNERS)
      fill(this.pr_c)
      stroke(0)
      rect(this.x1,this.y1,this.x2,this.y2)
    }
      
    lp_selected(mX,mY) {
      if ((mX > this.x1  && mX < this.x2) && (mY > this.y1 && mY < this.y2)) {
        return this.id
      }
      else {
        return -1
      }
     console.log(mX,mY,this.x1,this.y2) 
    }
  }
         
    
    class Effect {
      constructor() {
        this.id = 1;
        this.name = 'eff_nm';
        this.num_col = 3;
        this.def_pr_c = (0,0,255);
        this.def_sec_c = (255,0,0);
        this.deg_bkg_c = 0;
        this.sup_pal = true;
        this.def_pal_id = 3;
        this.sup_speed = true;
        this.def_speed = 50;
        this.sup_timer = true;
        this.def_timer = 40;
           
      }
      
      
    }
    
  
    
    let lgt_pnl = []; // set up an Array for Lgt_panel class objects

    // Populate lgt_pnl array 
   
    pop_my_lt_panels(lft_lt_box,l_box_x,l_box_y,l_box_w,l_box_h,0,'left',lgt_pnl);
    console.log(lgt_pnl[0].name);
    pop_my_lt_panels(rgt_lt_box,l_box_x,l_box_y,l_box_w,l_box_h,1,'right',lgt_pnl);
    console.log(lgt_pnl[1].name); 
    pop_my_lt_panels(top_lt_box,l_box_x,l_box_y,l_box_w,l_box_h,2,'top',lgt_pnl);
    console.log(lgt_pnl[2].name);
    pop_my_lt_panels(mid_lt_box,l_box_x,l_box_y,l_box_w,l_box_h,3,'middle',lgt_pnl);
    console.log(lgt_pnl[3].name);
    pop_my_lt_panels(bot_lt_box,l_box_x,l_box_y,l_box_w,l_box_h,4,'bottom',lgt_pnl);
    console.log(lgt_pnl[4].name);

    let effects = []; // set up an Array for effects - this  ultimately should come from wled effect data
    effects[0] = new Effect;
    effects[0].id = 1;
    effects[0].name = 'pulse';
    effects[0].num_col = 3;
    effects[0].sup_pal = true;
    effects[0].sup_timer = true;
    effects[0].sup_speed = true;

    effects[1] =new Effect;
    effects[1].id = 2;
    effects[1].name = 'solid';
    effects[1].num_col = 1;
    effects[1].sup_pal = false;
    effects[1].sup_timer = false;
    effects[1].sup_speed = false;
    


  
function setup() {
  createCanvas(720, 1080);
  background(153);
  pr_c_Picker = createColorPicker('#00BCD4');
  pr_c_Picker.position(400, 50);
  se_c_Picker = createColorPicker('#00BCD4');
  se_c_Picker.position(400, 85);
  bg_c_Picker = createColorPicker('#00BCD4');
  bg_c_Picker.position(400, 120);
  
   
  Effect_sel = createSelect()
  Effect_sel.position(600, 30);

  // Add color options.
  for (let ia = 0; ia < effects.length; ia++) {
  Effect_sel.option(effects[ia].name);
  }
  
  // Set the selected option to "red".
   Effect_sel.selected(effects[1].name); 
   Effect_sel.size(100,20)
   let Eff_title = createP('Panel Effect');
   Eff_title.position(600, 0);
   let Pan_title = createP(lgt_pnl[0].name +': Panel')
   Pan_title.position(400,5);

  
  
  
}

function draw() {
 
  
  background(150);
  
  // line(0,0,750,200);
  rectMode(CORNER);
  fill(0);
  stroke(0);
  rect(l_box_x,l_box_y,l_box_w,l_box_h);  // draw outside of luumbox
  
  //let left_c = left_Picker.color();
  //let right_c = right_Picker.color();
  //let top_c= top_Picker.color();
  
  
  draw_lt_pnls_3(lgt_pnl);
  //lgt_pnl1.draw_lp
  
  if (Effect_sel.selected() == 'pulse') {Effect_sel.hide()}
  
}  
  function mouseClicked() {
    
    for (let ij = 0; ij < lgt_pnl.length; ij++) {
     fnd_ix = lgt_pnl[ij].lp_selected(mouseX,mouseY)
     if (fnd_ix>-1) {pnl_clicked = fnd_ix}
      console.log(ij, fnd_ix)
    }    
    console.log(ij,my_pnls_str[ij].x1,my_pnls_str[ij].x2)
  
     
    //lt_pnl_clicked = chk_lt_pnls_2(lgt_pnl,mouseX,mouseY);
    console.log('light_panel_clicked',pnl_clicked);
    console.log(mouseX,mouseY,lgt_pnl.length)
   }


function pr_lf() {
    print('left light clicked');
    
  }

function draw_lt_panel(l_p_def,lmb_x,lmb_y,lmb_w_px,lmb_h_px) {
  rectMode(CORNERS)
  let pnl_x = l_p_def[0]*lmb_w_px+lmb_x;
  let pnl_y = l_p_def[1]*lmb_h_px+lmb_y;
  let pnl_x2 = l_p_def[2]*lmb_w_px + pnl_x;
  let pnl_y2 = l_p_def[3]*lmb_h_px + pnl_y;
  //print (pnl_y)
  rect(pnl_x,pnl_y,pnl_x2,pnl_y2);
  return 1;
   
}



function draw_lt_pnls_2(my_pnls_str,num_of_pnls) {
  rectMode(CORNERS)
  for (let ix = 0; ix < num_of_pnls; ix++) {
    fill(my_pnls_str[ix].pr_c)
    stroke(0)
    rect(my_pnls_str[ix].x1,my_pnls_str[ix].y1,my_pnls_str[ix].x2,my_pnls_str[ix].y2);
  }
  
  
}

function draw_lt_pnls_3(my_pnls_str) {
  rectMode(CORNERS)
  
        for (let ix = 0; ix < my_pnls_str.length; ix++) {
        my_pnls_str[ix].show_lp()
    }
}



function chk_lt_pnls_2(my_pnls_str,mX,mY) {
  
}

function pop_my_lt_panels(l_p_def,lmb_x,lmb_y,lmb_w_px,lmb_h_px,ix,lab,my_pnls_str) {
  my_pnls_str[ix] = new Lgt_panel();
  let pnl_x = l_p_def[0]*lmb_w_px+lmb_x;
  my_pnls_str[ix].x1 = pnl_x;
  let pnl_y = l_p_def[1]*lmb_h_px+lmb_y;
  my_pnls_str[ix].y1 = pnl_y;
  pnl_x2 = l_p_def[2]*lmb_w_px + pnl_x;
  my_pnls_str[ix].x2 = pnl_x2
  pnl_y2 = l_p_def[3]*lmb_h_px + pnl_y;
  my_pnls_str[ix].y2 = pnl_y2
  my_pnls_str[ix].name = lab
  my_pnls_str[ix].id = ix
  console.log(my_pnls_str[ix].name,my_pnls_str[ix].id)

}

