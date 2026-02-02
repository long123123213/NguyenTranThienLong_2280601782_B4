module.exports = {
    ConvertTitleToSlug: function (title) {
        let result = title.toLowerCase();
        // Thay thế ký tự có dấu thành không dấu
        result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // Thay thế ký tự đặc biệt và khoảng trắng bằng dấu gạch ngang
        result = result.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim('-');
        return result;
    }
}
