import"./chunk-K7VVS6JQ.js";import{a as c}from"./chunk-JWPGNWQB.js";import{a as u}from"./chunk-MGJOXMXS.js";import{a as n,b as r,f as a}from"./chunk-H5EO627A.js";import"./chunk-HTT347OR.js";import{B as l,I as p,J as v,K as h,L as m,M as b,N as y,O as g}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as $}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as i,c as o,h as d}from"./chunk-BVG7RORO.js";import{c as e}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var _=class extends u(d){static get properties(){return{src:{type:Object},languageTracks:{type:Array},currentTime:{type:Number},duration:{type:Number},playing:{type:Boolean},muted:{type:Boolean},frameTime:{type:Number},_hasPictureInPicture:{type:Boolean},_inPictureInPicture:{type:Boolean}}}constructor(){super();this.src="",this.languageTracks=[],this.playing=!1,this.muted=!0,this.currentTime=0,this.frameTime=1/30,this._hasPictureInPicture="pictureInPictureEnabled"in document}firstUpdated(){this.$gaReplayService=this.requestService("gaReplayService"),new c().bindListeners({source:this.$gaReplayService,target:this,eventMap:{"start-video-requested":"onReplayStartVideo","pause-video-requested":"onReplayPauseVideo","scrub-video-requested":"onReplayScrubVideo"}}),this.video=this.shadowRoot.querySelector("#video"),this.progress=this.shadowRoot.querySelector("#progress"),this.progressBar=this.shadowRoot.querySelector("#progress_bar")}onReplayStartVideo({time:t,rate:f}){if(this.video.currentTime=t,t>=this.video.duration)return;this.video.playbackRate=f,this.video.play();let s=()=>{this.video.playbackRate=1,this.video.removeEventListener("pause",s),this.video.removeEventListener("ended",s)};this.video.addEventListener("pause",s),this.video.addEventListener("ended",s)}onReplayPauseVideo({timestamp:t}){this.video.pause(),t&&(this.video.currentTime=t)}onReplayScrubVideo({timestamp:t}){this.scrubVideo(t)}playPause(){this.video.paused||this.video.ended?this.video.play():this.video.pause()}stop(){this.video.pause(),this.video.currentTime=0}advance(){this.video.currentTime=Math.min(this.video.duration,this.video.currentTime+this.frameTime)}previous(){this.video.currentTime=Math.max(0,this.video.currentTime-this.frameTime)}mute(){this.video.muted=!this.video.muted,this.muted=this.video.muted}async pictureInPicture(){await this.video.requestPictureInPicture()}scrubVideo(t){this.video.currentTime=t}getCurrentTime(){let t=this.video?this.video.currentTime:0;return t=t>this.duration?this.duration:t,Number(t).toFixed(2)}_handleVideoEvent(t){t.type==="playing"&&(this.playing=!0),(t.type==="pause"||t.type==="ended")&&(this.playing=!1),t.type==="timeupdate"&&(this.currentTime=this.video.currentTime),t.type==="loadedmetadata"&&(this.duration=this.video.duration,this.video.pause())}_dispatchPnPEnterEvent(){this._inPictureInPicture=!0,this.dispatchEvent(new CustomEvent("enter-pnp"))}_dispatchPnPExitEvent(){this._inPictureInPicture=!1,this.dispatchEvent(new CustomEvent("exit-pnp"))}static get styles(){return[$,i`
        :host {
          display: flex;
          flex-direction: column;
          place-content: center;
          position: relative;
        }
        #video {
          width: 100%;
          margin: auto;
          height: auto;
        }

        #video_controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--vst-color-bg-secondary);
          padding: var(--vst-space-2xs);
          min-block-size: 2.5rem;
        }

        #video_time {
          font-size: 0.75rem;
          padding-block-start: var(--vst-space-xs);
          margin: 0 var(--vst-space-2xs);
          font-variant-numeric: tabular-nums;
        }

        #video_scrubber {
          width: 100%;
          padding-inline-end: var(--vst-space-s);
        }

        ${a(i`.media-btn`)}
        ${n(i`.media-btn`)}
        ${r(i`.media-btn`)}

        .media-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: transparent;
          border-radius: 100%;
          border: none;
          touch-action: manipulation;
          width: 2rem;
          height: 2rem;
          --vst-ui-icon-color: var(--vst-color-fg-primary);
        }

        .media-btn:hover {
          --vst-ui-icon-color: var(--replay-btn-color-hover, var(--vst-color-fg-primary));
          background-color: var(--vst-color-media-btn-bg-hover);
        }

        .media-btn:active {
          --vst-ui-icon-color: var(--replay-btn-color-hover, var(--vst-color-fg-primary));
          background-color: var(--vst-color-bg);
          transform: translateY(1px);
        }

        ${a(i`#picture_in_picture`)}
        ${n(i`#picture_in_picture`)}
        ${r(i`#picture_in_picture`)}

        #picture_in_picture_container {
          position: absolute;
          top: 0;
          left: 0;
        }

        #picture_in_picture {
          background-color: transparent;
          border: transparent;
        }

        #picture_in_picture:hover,
        #picture_in_picture:active {
          background-color: transparent;
        }

        vst-ui-range {
          --vst-ui-range-input-height: 0;
        }
      `]}render(){return o`
      <video
        id="video"
        autoplay
        playsinline
        muted
        src="${this.src}"
        @playing="${this._handleVideoEvent}"
        @pause="${this._handleVideoEvent}"
        @seeking="${this._handleVideoEvent}"
        @seeked="${this._handleVideoEvent}"
        @timeupdate="${this._handleVideoEvent}"
        @loadedmetadata="${this._handleVideoEvent}"
        @loadeddata="${this._handleVideoEvent}"
        @ended="${this._handleVideoEvent}"
        @enterpictureinpicture="${this._dispatchPnPEnterEvent}"
        @leavepictureinpicture="${this._dispatchPnPExitEvent}"
      >
        ${this.languageTracks.map(t=>o`
            <track
              label="${t.label}"
              kind="subtitles"
              srclang="${t.srclang}"
              src="${t.src}"
              ?default="${t.default}"
            />
          `)}
      </video>
      <vst-style-tooltip id="picture_in_picture_container">
        <button
          id="picture_in_picture"
          class="btn"
          variant="icon"
          size="s"
          @click="${this.pictureInPicture}"
          ?hidden="${!this._hasPictureInPicture||this._inPictureInPicture}"
        >
          <vst-ui-icon size="s" .icon="${l}"></vst-ui-icon>
        </button>
        <span role="tooltip" position="block-end-start">${e("Picture in Picture")}</span>
      </vst-style-tooltip>
      <div id="video_controls" class="controls">
        <vst-style-tooltip>
          <button class="media-btn" @click="${this.playPause}">
            <vst-ui-icon .icon="${this.playing?b:y}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-start"
            >${this.playing?e("Pause Video"):e("Play Video")}</span
          >
        </vst-style-tooltip>
        <vst-style-tooltip>
          <button id="stop" class="media-btn" @click="${this.stop}">
            <vst-ui-icon .icon="${g}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-start"
            >${e("Go to Beginning of Video")}</span
          >
        </vst-style-tooltip>
        <vst-style-tooltip>
          <button id="prev" class="media-btn" @click="${this.previous}">
            <vst-ui-icon .icon="${v}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start">${e("Step Video Backwards")}</span>
        </vst-style-tooltip>
        <vst-style-tooltip>
          <button id="next" class="media-btn" @click="${this.advance}">
            <vst-ui-icon .icon="${p}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start">${e("Step Video Forward")}</span>
        </vst-style-tooltip>
        <div id="video_time">${this.getCurrentTime()}s/${Number(this.duration).toFixed(2)}s</div>
        <vst-ui-range
          id="video_scrubber"
          step="0.01"
          .value="${this.currentTime}"
          min="0"
          .max="${this.duration}"
          @value-input="${t=>this.scrubVideo(t.detail.value)}"
        >
        </vst-ui-range>
        <vst-style-tooltip>
          <button id="mute" class="media-btn" @click="${this.mute}">
            <vst-ui-icon .icon="${this.muted?h:m}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end"
            >${this.muted?e("Unmute Audio"):e("Mute Audio")}</span
          >
        </vst-style-tooltip>
      </div>
    `}};customElements.define("ga-video",_);export{_ as GaVideo};
