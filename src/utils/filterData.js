import { formatMillisecond } from "./date";

export const formatSongs = (list, privileges) => {
    const result = [];
    list.map((item, index) => {
        if (item.id) {
            // 是否有版权播放
            item.license = !privileges[index].cp;
            result.push({
                id: item.id,
                name: item.name,
                mvId: item.mv,
                singer: item.ar,
                album: item.al,
                alia: item.alia,
                vip: item.fee === 1,
                license: item.license,
                duration: formatMillisecond(item.dt),
                url: `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`,
                publishTime: formatMillisecond(item.publishTime),
            });
        }
    });
    return result;
};
