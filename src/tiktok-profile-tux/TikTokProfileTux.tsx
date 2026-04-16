import { useMemo, useState } from 'react';
import {
  TUXApp,
  TUXAvatar,
  TUXButton,
  TUXGrid,
  TUXGridCell,
  TUXInteractionContainer,
  TUXNavBar,
  TUXNavBarIconAction,
  TUXSeparator,
  TUXTabBar,
  TUXText,
} from '@byted-tiktok/tux-web';
import {
  TUXIcon2ptBookmark,
  TUXIcon2ptGrid3,
  TUXIcon3ptHeart,
  TUXIconExpExp01IconChevronLeftOffsetLTR,
  TUXIconExpExp01IconMediaShare,
  TUXIconTabBottomCreate,
  TUXIconTabBottomHomeFill,
  TUXIconTabBottomInbox,
  TUXIconTabBottomProfileFill,
  TUXIconTabDiscover,
  TUXIconColorEllipsisCircle,
} from '@byted-tiktok/tux-icons';

const AVATAR =
  'https://picsum.photos/seed/tiktok-profile-avatar/200/200';

const POST_SEEDS = [
  'tt-p1',
  'tt-p2',
  'tt-p3',
  'tt-p4',
  'tt-p5',
  'tt-p6',
  'tt-p7',
  'tt-p8',
  'tt-p9',
  'tt-p10',
  'tt-p11',
  'tt-p12',
];

function ProfilePostCell({ seed }: { seed: string }) {
  return (
    <TUXGridCell span={4}>
      <TUXInteractionContainer
        activeMode="overlay"
        role="button"
        tabIndex={0}
        aria-label="查看作品"
        style={{
          borderRadius: 'var(--tux-v2-radius-container-level0-small)',
          overflow: 'hidden',
          aspectRatio: '3 / 4',
          position: 'relative',
        }}
      >
        <img
          src={`https://picsum.photos/seed/${seed}/400/533`}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, var(--tux-v2-color-ui-image-overlay-black-a50) 0%, transparent 40%)',
            pointerEvents: 'none',
          }}
        />
        <TUXText
          typographyPreset="SmallText2-Semibold"
          color="BrandTikTokWhite"
          style={{
            position: 'absolute',
            left: 6,
            bottom: 6,
            textShadow: '0 1px 2px var(--tux-v2-color-ui-image-overlay-black-a50)',
          }}
        >
          1.2M
        </TUXText>
      </TUXInteractionContainer>
    </TUXGridCell>
  );
}

export function TikTokProfileTux() {
  const [mainTab, setMainTab] = useState('posts');

  const tabItems = useMemo(
    () => [
      {
        itemKey: 'posts',
        title: '作品',
        leadingIcon: <TUXIcon2ptGrid3 size={18} />,
      },
      {
        itemKey: 'saved',
        title: '收藏',
        leadingIcon: <TUXIcon2ptBookmark size={18} />,
      },
      {
        itemKey: 'likes',
        title: '喜欢',
        leadingIcon: <TUXIcon3ptHeart size={18} />,
      },
    ],
    [],
  );

  return (
    <TUXApp theme="light" platform="iOS">
      <div
        className="tux-web-canary"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--tux-v2-color-ui-page-flat-1)',
        }}
      >
        <TUXNavBar
          showTopSafeArea
          fixed
          showPlaceHolder
          showSeparator={false}
          customTitle={
            <TUXText typographyPreset="P1-Semibold" color="UIText1">
              @coolcreator
            </TUXText>
          }
          leading={
            <TUXNavBarIconAction
              icon={<TUXIconExpExp01IconChevronLeftOffsetLTR size={22} />}
              aria-label="返回"
              onClick={() => {}}
            />
          }
          trailing={
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <TUXNavBarIconAction
                icon={<TUXIconExpExp01IconMediaShare size={22} />}
                aria-label="分享主页"
                onClick={() => {}}
              />
              <TUXNavBarIconAction
                icon={<TUXIconColorEllipsisCircle size={24} />}
                aria-label="更多"
                onClick={() => {}}
              />
            </div>
          }
        />

        <div
          className="no-scrollbar"
          style={{
            flex: 1,
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: 'calc(56px + env(safe-area-inset-bottom, 0px))',
          }}
        >
          <div style={{ padding: '12px 16px 0', display: 'flex', gap: 16, alignItems: 'flex-end' }}>
            <TUXAvatar src={AVATAR} alt="" sizePreset="large" ringColor="UIShapeNeutral4" />
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
              <div>
                <TUXText typographyPreset="H4-Bold" color="UIText1" as="div">
                  128
                </TUXText>
                <TUXText typographyPreset="SmallText2-Regular" color="UIText3" as="div">
                  关注
                </TUXText>
              </div>
              <div>
                <TUXText typographyPreset="H4-Bold" color="UIText1" as="div">
                  9.8M
                </TUXText>
                <TUXText typographyPreset="SmallText2-Regular" color="UIText3" as="div">
                  粉丝
                </TUXText>
              </div>
              <div>
                <TUXText typographyPreset="H4-Bold" color="UIText1" as="div">
                  42.1M
                </TUXText>
                <TUXText typographyPreset="SmallText2-Regular" color="UIText3" as="div">
                  获赞
                </TUXText>
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 16px 0' }}>
            <TUXText typographyPreset="P1-Semibold" color="UIText1">
              Cool Creator
            </TUXText>
            <TUXText typographyPreset="P2-Regular" color="UIText2" style={{ marginTop: 4, display: 'block' }}>
              生活 · 旅行 · 音乐
            </TUXText>
            <TUXText typographyPreset="P2-Regular" color="UIText3" style={{ marginTop: 6, display: 'block' }}>
              用 TUX 组件搭建的个人页演示
            </TUXText>
          </div>

          <div
            style={{
              padding: '16px 16px 8px',
              display: 'flex',
              gap: 8,
            }}
          >
            <TUXButton
              text="关注"
              themePreset="primary"
              shapePreset="capsule"
              sizePreset="medium"
              block
            />
            <TUXButton
              text="发消息"
              themePreset="secondary"
              shapePreset="capsule"
              sizePreset="medium"
              block
            />
          </div>

          <TUXSeparator />

          <TUXTabBar
            items={tabItems}
            activeKey={mainTab}
            onChange={setMainTab}
            fitContent
            fixedSpacing
            showFadingEdge={false}
          />

          {mainTab === 'posts' && (
            <TUXGrid columns={12} gap={2} paddingX={8} style={{ paddingTop: 8, paddingBottom: 16 }}>
              {POST_SEEDS.map((s) => (
                <ProfilePostCell key={s} seed={s} />
              ))}
            </TUXGrid>
          )}

          {mainTab === 'saved' && (
            <div style={{ padding: '48px 24px', textAlign: 'center' }}>
              <TUXText typographyPreset="P2-Regular" color="UIText3">
                收藏的私密内容仅自己可见
              </TUXText>
            </div>
          )}

          {mainTab === 'likes' && (
            <div style={{ padding: '48px 24px', textAlign: 'center' }}>
              <TUXText typographyPreset="P2-Regular" color="UIText3">
                喜欢的视频将展示在这里
              </TUXText>
            </div>
          )}
        </div>

        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 'calc(8px + env(safe-area-inset-bottom, 0px))',
            backgroundColor: 'var(--tux-v2-color-ui-sheet-flat-1)',
            boxShadow: 'var(--tux-v2-shadow-subtle)',
          }}
        >
          <TUXNavBarIconAction
            icon={<TUXIconTabBottomHomeFill size={26} />}
            aria-label="首页"
            onClick={() => {}}
          />
          <TUXNavBarIconAction
            icon={<TUXIconTabDiscover size={26} />}
            aria-label="好友"
            onClick={() => {}}
          />
          <TUXNavBarIconAction
            icon={<TUXIconTabBottomCreate size={32} />}
            aria-label="创作"
            onClick={() => {}}
            padding="4px"
          />
          <TUXNavBarIconAction
            icon={<TUXIconTabBottomInbox size={26} />}
            aria-label="收件箱"
            onClick={() => {}}
          />
          <TUXNavBarIconAction
            icon={<TUXIconTabBottomProfileFill size={26} />}
            aria-label="我"
            onClick={() => {}}
          />
        </div>
      </div>
    </TUXApp>
  );
}
