var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_regions20180101_1 = new ol.format.GeoJSON();
var features_regions20180101_1 = format_regions20180101_1.readFeatures(json_regions20180101_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions20180101_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regions20180101_1.addFeatures(features_regions20180101_1);
var lyr_regions20180101_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regions20180101_1, 
                style: style_regions20180101_1,
                interactive: false,
                title: '<img src="styles/legend/regions20180101_1.png" /> regions-20180101'
            });
var format_Listingdesservicesparrsidences_2 = new ol.format.GeoJSON();
var features_Listingdesservicesparrsidences_2 = format_Listingdesservicesparrsidences_2.readFeatures(json_Listingdesservicesparrsidences_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Listingdesservicesparrsidences_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Listingdesservicesparrsidences_2.addFeatures(features_Listingdesservicesparrsidences_2);cluster_Listingdesservicesparrsidences_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Listingdesservicesparrsidences_2
});
var lyr_Listingdesservicesparrsidences_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Listingdesservicesparrsidences_2, 
                style: style_Listingdesservicesparrsidences_2,
                interactive: true,
                title: '<img src="styles/legend/Listingdesservicesparrsidences_2.png" /> Listing des services par résidences'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_regions20180101_1.setVisible(true);lyr_Listingdesservicesparrsidences_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_regions20180101_1,lyr_Listingdesservicesparrsidences_2];
lyr_regions20180101_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_Listingdesservicesparrsidences_2.set('fieldAliases', {'Dénomination': 'Residence', 'Adresse': 'Adresse', 'Y': 'Y', 'X': 'X', 'Code Postal': 'CP', 'Ville': 'Ville', 'Nombre de logements': 'NB_Log', 'Service_Animateur / Responsable Résidence': 'Service_Animateur', 'Service_Interphone': 'Service_Interphone', 'Service_Vidéosurveillance': 'Service_Vidéosurveillance', 'Service_Pręt de matériel': 'Service_Pret_Mat', 'Service_Accčs Internet': 'Service_Internet', 'Service_Local Poubelles': 'Service_Poubelles', 'Service_Buanderie sans monnayeur': 'Service_Buanderie', 'Optionnel_Cafétériat avec Service de Petit déjeuner': 'Optionnel_Cafétériat avec Service de Petit déjeuner', 'Optionnel_Local Vélo': 'Optionnel_Local Vélo', 'Optionnel_Salle TV / Détente': 'Optionnel_Salle TV / Détente', 'Optionnel_Salle d\'Etude / Coworking': 'Optionnel_Salle d\'Etude / Coworking', 'Optionnel_Salle de sport': 'Optionnel_Salle de sport', 'Optionnel_Espace Wellness': 'Optionnel_Espace Wellness', });
lyr_regions20180101_1.set('fieldImages', {'code_insee': 'Hidden', 'nom': 'Hidden', 'nuts2': 'Hidden', 'wikipedia': 'Hidden', 'surf_km2': 'Hidden', });
lyr_Listingdesservicesparrsidences_2.set('fieldImages', {'Dénomination': 'TextEdit', 'Adresse': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Code Postal': 'TextEdit', 'Ville': 'TextEdit', 'Nombre de logements': 'TextEdit', 'Service_Animateur / Responsable Résidence': 'CheckBox', 'Service_Interphone': 'CheckBox', 'Service_Vidéosurveillance': 'CheckBox', 'Service_Pręt de matériel': 'CheckBox', 'Service_Accčs Internet': 'CheckBox', 'Service_Local Poubelles': 'CheckBox', 'Service_Buanderie sans monnayeur': 'CheckBox', 'Optionnel_Cafétériat avec Service de Petit déjeuner': 'CheckBox', 'Optionnel_Local Vélo': 'CheckBox', 'Optionnel_Salle TV / Détente': 'CheckBox', 'Optionnel_Salle d\'Etude / Coworking': 'CheckBox', 'Optionnel_Salle de sport': 'CheckBox', 'Optionnel_Espace Wellness': 'CheckBox', });
lyr_regions20180101_1.set('fieldLabels', {});
lyr_Listingdesservicesparrsidences_2.set('fieldLabels', {'Dénomination': 'inline label', 'Adresse': 'inline label', 'Code Postal': 'inline label', 'Ville': 'inline label', 'Nombre de logements': 'inline label', 'Service_Animateur / Responsable Résidence': 'inline label', 'Service_Interphone': 'inline label', 'Service_Vidéosurveillance': 'inline label', 'Service_Pręt de matériel': 'inline label', 'Service_Accčs Internet': 'inline label', 'Service_Local Poubelles': 'inline label', 'Service_Buanderie sans monnayeur': 'inline label', 'Optionnel_Cafétériat avec Service de Petit déjeuner': 'inline label', 'Optionnel_Local Vélo': 'inline label', 'Optionnel_Salle TV / Détente': 'inline label', 'Optionnel_Salle d\'Etude / Coworking': 'inline label', 'Optionnel_Salle de sport': 'inline label', 'Optionnel_Espace Wellness': 'inline label', });
lyr_Listingdesservicesparrsidences_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});